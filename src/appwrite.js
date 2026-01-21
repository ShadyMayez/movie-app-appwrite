// src/appwrite.js
import { Client, Databases, ID, Query } from "appwrite";

// Your Appwrite project settings
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// Initialize Appwrite client
const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1") // Or your own Appwrite endpoint
    .setProject(PROJECT_ID);

// Database instance
const database = new Databases(client);

/**
 * Updates the search count for a movie in Appwrite database.
 * If the search term exists, increment count. Otherwise, create a new document.
 * @param {string} searchTerm
 * @param {Object} movie - movie object from TMDB
 */
export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // List documents matching the search term
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal("searchTerm", searchTerm),
        ]);

        if (result.documents.length > 0) {
            // Document exists → update count
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: (doc.count || 0) + 1,
            });
        } else {
            // Document does not exist → create new
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm: searchTerm,
                count: 1,
                movie_id: movie.id,
                title: movie.title,
                poster_url: movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : "/No-poster.png",
            });
        }
    } catch (error) {
        console.error("Appwrite error:", error);
    }
};
