# SignUpFOrm
Design the above UI using streamlit and a custom react component. On entering the Account, username, and password, the Signup button should become focus mode (blue). On clicking Sign Up, you can display a success message.

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
streamlit run sign_up_form/__init__.py
```

## To do
- [ ] On form submit execute a callback instead of returning variable
- [ ] Add instructions to easily verify the functionality of the component