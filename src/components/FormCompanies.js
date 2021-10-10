import React, { useState } from "react";
import axios from "axios";
import {
  FlexContainer,
  MainForm,
  FormContainer,
  FormLabel,
  FormInput,
  FlexItem,
  Button,
  Error,
  Message,
  FormText,
  FlexList,
  FlexListText,
} from "../styles/FormCompanies";
import Fade from "react-reveal/Fade";
import Checkbox from "../components/Checkbox";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    Name: "",
    Email: "",
    Role: "",
    Company: "",
    Engagement: [
      { Value: "Advising", X: false },
      { Value: "Board membership", X: false },
    ],
    Work: [
      { Value: "Part-time", X: false },
      { Value: "Full-time", X: false },
    ],
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        Name: "",
        Email: "",
        Role: "",
        Company: "",
        Engagement: [
          { Value: "Advising", X: false },
          { Value: "Board membership", X: false },
        ],
        Work: [
          { Value: "Part-time", X: false },
          { Value: "Full-time", X: false },
        ],
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleCheckChieldElement = (event) => {
    let Engagement = inputs.Engagement;
    let Work = inputs.Work;

    Engagement.forEach((fruite) => {
      if (fruite.Value === event.target.value) fruite.X = event.target.checked;
    });

    Work.forEach((work) => {
      if (work.Value === event.target.value) work.X = event.target.checked;
    });

    setInputs({ ...inputs, Engagement, Work });

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnChange = (e) => {
    e.persist();

    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xpzoyzwj",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          <span>You have successfully made your first move! <br></br> We will contact you when a match is found.</span>
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <Fade>
        <div className="container-form">
          <FormText>
            Ready to connect with top talent? <br></br> Fill in your information
            below.
          </FormText>
        </div>

        <div className="container">
          <FlexContainer>
            <MainForm>
              <FormContainer onSubmit={handleOnSubmit}>
                <FlexItem>
                  <FormLabel htmlFor="name">
                    Name of the contact person:
                  </FormLabel>
                  <FormInput
                    id="Name"
                    type="Name"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.Name}
                  />
                </FlexItem>
                <FlexItem>
                  <FormLabel htmlFor="Email">Email:</FormLabel>
                  <FormInput
                    id="Email"
                    type="Email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.Email}
                  />
                </FlexItem>
                <FlexItem>
                  <FormLabel htmlFor="Role">Role in the company:</FormLabel>
                  <FormInput
                    id="Role"
                    type="Role"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.Role}
                  />
                </FlexItem>

                <FlexItem>
                  <FormLabel htmlFor="Company">Company:</FormLabel>
                  <FormInput
                    id="Company"
                    type="Company"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.Company}
                  />
                </FlexItem>
                <FlexListText>
                  The type of engagement you are looking for (choose all that
                  applies):
                </FlexListText>
                <FlexList>
                  {inputs.Engagement.map((fruite) => {
                    return (
                      <Checkbox
                        handleCheckChieldElement={handleCheckChieldElement}
                        {...fruite}
                      />
                    );
                  })}
                </FlexList>

                <FlexListText>
                  The desired availability of the hiree (choose all that
                  applies):
                </FlexListText>
                <FlexList>
                  {inputs.Work.map((work) => {
                    return (
                      <Checkbox
                        handleCheckChieldElement={handleCheckChieldElement}
                        {...work}
                      />
                    );
                  })}
                </FlexList>
                <Button type="submit" disabled={status.submitting}>
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </Button>
              </FormContainer>
              {status.info.error && <Error>Error: {status.info.msg}</Error>}
              {!status.info.error && status.info.msg && (
               <Message style={{marginTop: "20px"}}>{status.info.msg}</Message>
              )}
            </MainForm>
           
          </FlexContainer>
        </div>
      </Fade>
    </>
  );
}
