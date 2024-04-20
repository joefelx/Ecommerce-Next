import { Client, Account } from "appwrite";
import { APPWRITE_PROJECT_ID } from "@/constants";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(APPWRITE_PROJECT_ID); // Replace with your project ID

export default client;
