# SignUpForm
Design the above UI using streamlit and a custom react component. On entering the Account, username, and password, the Signup button should become focus mode (blue). On clicking Sign Up, you can display a success message.

## Test the app for Production
Follow the documentation to setup a [virtualenv](https://docs.streamlit.io/library/get-started/installation)
Make sure to have node, npm installed in your system
Then execute the following commands
```
git clone git@github.com:nitinkushwaha/streamlit-signup-form.git
cd streamlit-signup-form/sign_up_form/frontend
npm run build
cd ../../
pipenv shell
streamlit run app.py
```

## Setup development enviornment
Follow the documentation to setup a [virtualenv](https://docs.streamlit.io/library/get-started/installation)
```
git clone git@github.com:nitinkushwaha/streamlit-signup-form.git
cd streamlit-signup-form/frontend
npm i
npm run start
```

Open another terminal and execute the following commands to execute the react App
```
git clone git@github.com:nitinkushwaha/streamlit-signup-form.git
cd streamlit-signup-form
pipenv shell
pipenv install streamlit
```
Update the _RELEASE variable to False in file sign_up_form/__init__.py and then execute the following command to start the python development server
```
streamlit run sign_up_form/__init__.py
```

## To do
- [ ] On form submit execute a callback instead of returning variable
- [x] Add instructions to easily verify the functionality of the component