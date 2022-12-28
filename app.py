import streamlit as st
from sign_up_form import sign_up_form_component

st.set_page_config(page_title="SignUp Form", page_icon="tada", layout="centered")

button_submitted = sign_up_form_component()
if button_submitted:
    st.info("Form has been submitted")
