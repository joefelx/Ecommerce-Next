import { ID, Storage } from "appwrite";

import client from "./appwrite";
import { APPWRITE_BUCKET_ID } from "@/constants";

class ImageUpload {
  private storage;
  constructor() {
    this.storage = new Storage(client);
  }

  async uploadImage(file: File) {
    try {
      const promise = await this.storage.createFile(
        APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );

      return this.getFileURL(promise.$id);
    } catch (error) {
      console.log(error);
    }
  }

  async getFileURL(id: string) {
    const { href } = this.storage.getFilePreview(APPWRITE_BUCKET_ID, id);

    return href;
  }
}

export default ImageUpload;
