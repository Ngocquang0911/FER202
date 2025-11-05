# React useContext Exercise

This project demonstrates the use of React's `useContext` hook with two main contexts: `ThemeContext` and `AuthContext`.

## Features

### Exercise 1: ThemeContext
- **ThemeContext**: Manages light/dark theme switching
- **CounterComponent**: Uses `useReducer` for counter state management and `ThemeContext` for theme switching
- **LightSwitch**: Uses `useReducer` for light switch state and `ThemeContext` for theme switching

### Exercise 2: AuthContext
- **AuthContext**: Manages user authentication with mock data
- **LoginForm**: Uses `useReducer` for form state management and `AuthContext` for authentication
- **Validation**: Form validation with admin-only access restriction

## Project Structure

```
├── contexts/
│   ├── ThemeContext.js    # Theme management context
│   └── AuthContext.js     # Authentication context
├── components/
│   ├── CounterComponent.jsx   # Counter with theme switching
│   ├── LightSwitch.jsx        # Light switch with theme switching
│   └── LoginForm.jsx          # Login form with authentication
├── App.js                 # Main app component
├── index.js              # App entry point
└── package.json          # Dependencies
```

## Demo Accounts

The AuthContext includes mock data with the following accounts:

- **Admin Account**: 
  - Username: `admin`
  - Password: `123456`
  - Role: `admin` (can login)
  - Status: `active`

- **User Accounts** (cannot login - admin only):
  - Username: `user1`, Password: `123456`, Role: `user`, Status: `active`
  - Username: `user2`, Password: `123456`, Role: `user`, Status: `locked`

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Key Concepts Demonstrated

### useContext Hook
- Creating contexts with `React.createContext()`
- Providing context values with `Context.Provider`
- Consuming context values with `useContext()` hook
- Creating custom hooks for easier context usage

### Context Patterns
- **ThemeContext**: Global theme state management
- **AuthContext**: User authentication state management
- **Provider Composition**: Nesting multiple providers

### Form Management
- Using `useReducer` for complex form state
- Form validation with error handling
- Integration with context for authentication

### Component Integration
- Multiple components sharing the same context
- State synchronization across components
- Clean separation of concerns
