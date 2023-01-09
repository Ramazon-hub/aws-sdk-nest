import { ParseFilePipe, FileTypeValidator } from '@nestjs/common';

export default new ParseFilePipe({
  fileIsRequired: false,
  validators: [
    new FileTypeValidator({
      fileType: /(image\/jpeg|image\/jpg|image\/png)/,
    }),
  ],
});
