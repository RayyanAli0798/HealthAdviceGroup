# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Front-End and Back-End setup

# Links

On accounts page, under the sign in and sign up component the backend is referenced on port 8001. In order for the code to work, this port needs to be running

To run front end you MUST do this in the terminal: 
    1) Npm install
    2) Npm run dev
On main.py, the front end port requiered is 5173. This could either be changed on main.py or the front end port with 5173 is needed to be opened

Also for backend, these commands are needed
    1) py -m venv venv
        - This creates a virtual enviroment (venv) folder
    2) venv/scripts/activate
        - This activates your venv folder
    3) Pip install fastapi[all] pymongo pydantic
        - This installs all dependancies like fastAPI, Pymongo, Pydantic
    4) pip install "passlib[argon2]" argon2-cffi
        - This installs the library for the hashing library
    5) uvicorn main:app --reload --port 8001
        - This loads the port, it MUST be 8001 due to api calls, or you would have to change it on the accounts page. 


For the database, it is referenced on db.py. You need mongo db compus with the port 27017 to run it successfully otherwise, front end would not let you log in. 