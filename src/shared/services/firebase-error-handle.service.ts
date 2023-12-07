import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import {ToastrService} from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorHandleService {

  constructor(private toastService:ToastrService) { }

  handleFirebaseError(error: any) {
    if (error && error.code && error.message) {
      // Check if it's an authentication error
      if (error.code.startsWith('auth/')) {
        const errorMessage = this.handleAuthError(error);
        this.toastService.error(errorMessage);
        return throwError(errorMessage);
      }
    }
    const message = 'An error occurred while communicating with Firebase. Please try again later.'
    this.toastService.error(message)
    return throwError(message);
  }

  private handleAuthError(error: any): string {
    // Handle different authentication errors based on the error code
    switch (error.code) {
      case 'auth/email-already-in-use':
        return 'The email address is already in use by another account. Please choose a different email address.';
  
      case 'auth/invalid-email':
        return 'The email address is badly formatted. Please enter a valid email address.';
  
      case 'auth/operation-not-allowed':
        return 'The requested authentication operation is not allowed.';
  
      case 'auth/weak-password':
        return 'The password is too weak. Please choose a stronger password.';
  
      case 'auth/user-not-found':
        return 'There is no user corresponding to the given email address.';
  
      case 'auth/wrong-password':
        return 'The password is invalid for the given email address.';
  
      case 'auth/network-request-failed':
        return 'A network error occurred. Please check your internet connection and try again.';
  
      case 'auth/invalid-action-code':
        return 'The action code is invalid or expired. Please request a new one.';
  
      case 'auth/user-disabled':
        return 'The user account has been disabled by an administrator.';
  
      case 'auth/user-token-expired':
        return 'The user\'s credential is no longer valid. Please sign in again.';
  
      case 'auth/too-many-requests':
        return 'Too many requests. Please try again later.';
  
      case 'auth/requires-recent-login':
        return 'For security reasons, you need to sign in again.';
  
      default:
        // If no specific handling, return the default message
        return 'Authentication error: ' + error.message;
    }
  }
}
