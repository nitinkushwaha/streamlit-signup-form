import streamlit as st
import os

st.set_page_config(page_title="SignUp Form", page_icon="tada", layout="centered")

if "button_toggle" not in st.session_state:
    st.session_state.button_toggle = 0
"session state is", st.session_state
def page_about():
    st.header("About me")
    st.markdown(":tada: My name is Nitin")
def page_another():
    st.header("Another about me")
    st.markdown(":tada: My surname is Kushwaha")


def toggle_button_click_handler():
    st.session_state.button_toggle = st.session_state.button_toggle + 1
# def reset_button_click_handler():
#     # st.session_state.button_toggle = 0
#     st.session_state.name = "Has been reset"
st.info("One")
st.info("Two")
st.button("Click me to turn orage one by one", key="increment", on_click=toggle_button_click_handler)
reset = st.button("Click me to turn orage one by one", key="reset")
if reset:
    "I was reset"
    st.session_state.button_toggle -= 1
    st.session_state
st.session_state
st.title("Example: :tada:")
st.write("...")
st.header("1st step streamlit.write")
st.write("...")
st.caption("This is a caption")
st.text("This is a random text")
clicked = st.button("Click me")
st.write(f"Button Status:{clicked}")
if st.checkbox("Check me"):
    st.write(f"Check Status")
st.radio("Check me!", ["Option 1", "Option 2"])
pages = {
    "About me": page_about,
    "Someelse about me": page_another
}
selected_item = st.selectbox("What do you want to know about me?", pages.keys())
pages[selected_item]()
st.multiselect("Check me!", ["Option 1", "Option 2"])
st.slider("Slide me", 1, 9, value=10)
name = st.text_input("What is your name?", key="name")
if name != '':
    st.markdown("Hello {name} nice to meet you :tada:")
name = st.text_input("What is your password?", type="password")

st.balloons()