// FEATURE: Firebase Configuration
// FILE: firebase.service.ts
// PURPOSE: Firebase initialization and Google Auth configuration
// LAST MODIFIED: January 28, 2025

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration for Rewin project
const firebaseConfig = {
  apiKey: "AIzaSyCF366Uvs28FeRzhEH84Zvm6jVoX1QcnOU",
  authDomain: "rewin-f4ca1.firebaseapp.com",
  databaseURL: "https://rewin-f4ca1-default-rtdb.firebaseio.com",
  projectId: "rewin-f4ca1",
  storageBucket: "rewin-f4ca1.firebasestorage.app",
  messagingSenderId: "355525518295",
  appId: "1:355525518295:web:15b8d098eea4981a48a192",
  measurementId: "G-VDVG2TWFBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Admin email list - TODO: Move to Firestore for better management
const ADMIN_EMAILS = [
  'alnuaimi.humam@gmail.com', // Add your admin emails here
  // Add more admin emails as needed
];

// Auth Service
export class AuthService {
  // Check if user is admin
  static async isUserAdmin(user: User): Promise<boolean> {
    try {
      // Method 1: Check against admin email list
      if (ADMIN_EMAILS.includes(user.email || '')) {
        return true;
      }

      // Method 2: Check Firestore admin collection (optional)
      const adminDoc = await getDoc(doc(db, 'admins', user.email || ''));
      return adminDoc.exists();
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  }

  // Create admin record in Firestore
  static async createAdminRecord(user: User) {
    try {
      await setDoc(doc(db, 'admins', user.email || ''), {
        email: user.email,
        displayName: user.displayName,
        role: 'admin',
        createdAt: new Date(),
        lastLogin: new Date()
      });
    } catch (error) {
      console.error('Error creating admin record:', error);
    }
  }

  // Sign in with email and password
  static async signInWithEmail(email: string, password: string, loginType: 'admin' | 'user' = 'admin') {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const isAdmin = await this.isUserAdmin(result.user);
      
      // If trying to access admin panel, check admin privileges
      if (loginType === 'admin' && !isAdmin) {
        await signOut(auth);
        return {
          success: false,
          user: null,
          error: 'Access denied. Admin privileges required.'
        };
      }

      // Create/update admin record if user is admin
      if (isAdmin) {
        await this.createAdminRecord(result.user);
      }

      return {
        success: true,
        user: result.user,
        isAdmin,
        loginType,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        user: null,
        isAdmin: false,
        error: error.message
      };
    }
  }

  // Sign in with Google
  static async signInWithGoogle(loginType: 'admin' | 'user' = 'admin') {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const isAdmin = await this.isUserAdmin(result.user);
      
      // If trying to access admin panel, check admin privileges
      if (loginType === 'admin' && !isAdmin) {
        await signOut(auth);
        return {
          success: false,
          user: null,
          error: 'Access denied. Admin privileges required.'
        };
      }

      // Create/update admin record if user is admin
      if (isAdmin) {
        await this.createAdminRecord(result.user);
      }

      return {
        success: true,
        user: result.user,
        isAdmin,
        loginType,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        user: null,
        isAdmin: false,
        error: error.message
      };
    }
  }

  // Sign out
  static async signOut() {
    try {
      await signOut(auth);
      return {
        success: true,
        error: null
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get current user
  static getCurrentUser() {
    return auth.currentUser;
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return !!auth.currentUser;
  }
}

export default AuthService;
