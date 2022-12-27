import os
import streamlit.components.v1 as components

_RELEASE = False
if not _RELEASE:
    _component_func = components.declare_component(
        "my_component",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("my_component", path=build_dir)


def my_component(account=None, key=None):
    """Create a new instance of "SignUpForm".

    Parameters
    ----------
    account: account
        The account filed details
    key: str or None
        An optional key that uniquely identifies this component. If this is
        None, and the component's arguments are changed, the component will
        be re-mounted in the Streamlit frontend and lose its current state.

    Returns
    -------
    boolean
        Form submitted

    """
    component_value = _component_func(account=account, key=key, default=False)
    return component_value

if not _RELEASE:
    import streamlit as st

    st.subheader("Component view without account number")
    signup_clicked_1 = my_component()
    if signup_clicked_1:
        st.markdown("You've clicked on signup")

    st.markdown("---")
    st.subheader("Component with variable account args")

    name_input = st.text_input("Enter a account number", value="12345678")
    signup_clicked_2 = my_component(name_input, key="foo")
    if signup_clicked_2:
        st.markdown("You've clicked on signup")
