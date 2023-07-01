import { Client, ID, Account, Databases, Storage } from 'appwrite';


const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
