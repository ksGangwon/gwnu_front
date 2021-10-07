import _ from "lodash";

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import FileDialogButtonView from "@ckeditor/ckeditor5-upload/src/ui/filedialogbuttonview";
import FileRepository from "@ckeditor/ckeditor5-upload/src/filerepository";
import Notification from "@ckeditor/ckeditor5-ui/src/notification/notification";
import Command from "@ckeditor/ckeditor5-core/src/command";
import { useState } from "react";

const _UPLOAD_FILE_LIMIT = 50000000;

const createImageTypeRegExp = (types) => {
  // Sanitize the MIME type name which may include: "+", "-" or ".".
  const regExpSafeNames = types.map((type) => type.replace("+", "\\+"));

  return new RegExp(`^image\\/(${regExpSafeNames.join("|")})$`);
};

let fileSet = false;

class FileUploadCommand extends Command {
  /**
   * Executes the command.
   *
   * @fires execute
   * @param {Object} options Options for the executed command.
   * @param {File|Array.<File>} options.file The image file or an array of image files to upload.
   */
  execute(options) {
    const editor = this.editor;
    const model = editor.model;

    const fileRepository = editor.plugins.get(FileRepository);
    const notification = editor.plugins.get(Notification);

    model.change((writer) => {
      const filesToUpload = Array.isArray(options.file)
        ? options.file
        : [options.file];

      for (const file of filesToUpload) {
        console.log(file);
        if (file.size > _UPLOAD_FILE_LIMIT) {
          notification.showWarning("Can not upload files larger than 50MB");
          return;
        }
        uploadFile(writer, model, fileRepository, file);
      }
    });
  }
}

// Handles uploading single file.
//
// @param {module:engine/model/writer~writer} writer
// @param {module:engine/model/model~Model} model
// @param {File} file
function uploadFile(writer, model, fileRepository, file) {
  const loader = fileRepository.createLoader(file);

  if (!loader) {
    return;
  }

  loader
    .read()
    .then(() => {
      loader.upload()
    })
    .then(() => {
      model.set('fileName',file.name)
      model.set('fileData',file)

      model.document.fire("change:data",file.name)
      
      alert(file.name+"파일이 첨부되었습니다")
      fileSet = true;
      if(fileSet === true){
        model.set('fileName',undefined)
        model.set('fileData',undefined)
        fileSet = false;
      }
    });
}

class Uploader extends Plugin {
  init() {
    const editor = this.editor;
    const model = editor.model;
    editor.commands.add("fileUpload", new FileUploadCommand(editor));

    editor.ui.componentFactory.add("insertFileAndImage", (locale) => {
      const view = new FileDialogButtonView(locale);
      const imageTypes = editor.config.get("image.upload.types");
      const imageTypesRegExp = createImageTypeRegExp(imageTypes);

      view.buttonView.set({
        label: "Insert image and file",
        icon: imageIcon,
        tooltip: true,
      });

      view.on("done", (evt, files) => {
        const [imagesToUpload, filesToUpload] = _.partition(files, (file) =>
          imageTypesRegExp.test(file.type)
        );

        if (imagesToUpload.length) {
          editor.execute("imageUpload", { file: imagesToUpload });
          model.set('fileName',imagesToUpload[0].name)
          model.set('fileData',imagesToUpload)
          model.document.fire("change:data","imageLoad")
          alert("이미지 파일이 첨부되었습니다")
          fileSet = true;
          if(fileSet === true){
            model.set('fileName',undefined)
            model.set('fileData',undefined)
            fileSet = false;
          }
          
        }

        if (filesToUpload.length) {
          editor.execute("fileUpload", { file: filesToUpload });
        }
      });

      return view;
    });
  }
}

export default Uploader;
