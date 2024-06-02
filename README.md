# Microfrontend Todo List Application

## Overview

This microfrontend (MFE) Todo List application is a standalone React component built with TypeScript and Vite. It provides features for managing todo items, including creation, completion, importance marking, and filtering, with state persistence using localStorage.

## Features

- Todo Creation
- Todo Status Management (Complete/Incomplete)
- Todo Persistence with localStorage
- Filtering (All, Active, Completed)
- TypeScript for type safety
- Unit testing with Jest and React Testing Library
- State management with Context Api and React's useReducer
- CSS Modules for scoped styling

## Setup Instructions

1. **Clone the Repository:**

```bash
   git clone git@github.com:YuriiKhudenko/microfrontendTodo.git
   cd microfrontend-todo/todo-app
```

2. **Install Dependencies:**

```bash
 npm install
```

3. **Run the Application:**

```bash
   npm run dev
```

4. **Build the Application for Production:**

```bash
   npm run build
```

5. **Serve the Production Build:**

```bash
   npm install -g serve
   serve -s dist
```
