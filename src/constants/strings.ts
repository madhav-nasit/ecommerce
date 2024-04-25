export const strings = {
  common: {
    appName: 'Ecommerce',
    oops: 'Oops!',
    notFound: 'Error 404: Page not found',
    goBack: 'Go back',
    genericErrorMessage: 'An unexpected error occurred.',
  },
  validation: {
    email: {
      required: 'Email is required',
      invalid: 'Invalid email address',
    },
    password: {
      required: 'Password is required',
      length:
        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
      lowercase: 'Password must contain at least one lowercase letter',
      uppercase: 'Password must contain at least one uppercase letter',
      number: 'Password must contain at least one number',
      special: 'Password must contain at least one special character',
      confirmPassword: 'Please confirm your password',
      doNotMatch: 'Passwords do not match',
    },
    name: {
      firstName: 'First name is required',
      lastName: 'Last name is required',
    },
    acceptTerms: 'Please accept terms of use and privacy policy.',
  },
  auth: {
    common: {
      emailAddress: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      fName: 'First Name',
      lName: 'Last Name',
      and: 'and',
      iAccept: 'I accept the',
      termsOfUse: 'terms of use',
      privacyPolicy: 'privacy policy',
    },
    signIn: {
      title: 'Sign In',
      dontHaveAccount: `Don’t have an accout yet?`,
    },
    signUp: {
      title: 'Sign Up',
      alreadyHaveAccount: 'Already have an account?',
    },
  },
  primary: {
    common: {
      signOut: 'Sign Out',
      termsOfUse: 'Terms of Use',
      privacyPolicy: 'Privacy Policy',
    },
    home: {
      title: 'Home',
      next: 'Next',
      previous: 'Previous',
    },
    productDetails: {
      addToCart: 'Add to Cart',
      rating: 'Rating',
      brand: 'Brand',
      category: 'Category',
      stock: 'Stock',
    },
    cart: {
      title: 'Your Cart',
      price: 'Price',
      total: 'Total',
      cartSummary: 'Cart summary',
    },
  },
  apiErrors: {
    requestTimeout: 'Request timed out. Please check your internet connection or try again later.',
    networkError: 'Network error. Please check your internet connection.',
    requestCanceled: 'Request canceled. Please try again or contact support.',
    unauthorizedAccess: 'Unauthorized access. Please log in again.',
    forbiddenAccess: 'Forbidden. You do not have permission to access this resource.',
    resourceNotFound: 'Resource not found.',
    internalServerError: 'Internal server error. Please try again later or contact support.',
    unexpectedError: 'Unexpected error occurred. Please try again.',
    badRequest: 'Bad request. Please check your request parameters.',
    appleSignInError: 'Apple Sign in failed!',
    appleSignInCancel: 'User canceled Apple Sign in.',
  },
};
