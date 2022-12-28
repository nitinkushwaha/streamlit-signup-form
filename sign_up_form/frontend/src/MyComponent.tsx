import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import SignUpForm from "./SignUpForm"

interface State {
  account: string
  isSubmitted: boolean
}
class MyComponent extends StreamlitComponentBase<State> {

  public render = (): ReactNode => {
    const account = this.props.args["account"]
    return (
        <SignUpForm accountNumber={account} submitCallback={this.onClicked} />
    )
  }

  /** Click handler for our "Click Me!" button. */
  private onClicked = (): void => {
    //Submit the form
    //or call the API, On based on response, set the component value to true.
    Streamlit.setComponentValue(true);
  }

}
export default withStreamlitConnection(MyComponent)
