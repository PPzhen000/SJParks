import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Generic/Button';
import Textarea from '../UI/Form/Textarea';
import Input from '../UI/Form/Input';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-content: center;
  height: 60vh;
  form {
    display: grid;
    width: 500px;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: ${props => props.theme.displays.tablet}) {
    grid-template-columns: 1fr;
    height: auto;

    form {
      grid-template-columns: 1fr;
      width: 300px;
    }
  }

  @media screen and (max-width: ${props => props.theme.displays.tablet}) {
    grid-template-columns: 1fr;
    height: auto;

    form {
      grid-template-columns: 1fr;
      width: 300px;

      textarea,
      button {
        grid-column: auto;
      }
    }
  }
`;

const Survey = styled.article`
  width: 500px;

  p {
    line-height: 1.5;
  }

  a {
    background-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.light};
    text-decoration: none;
    display: block;
    border-radius: 5px;
    padding: 0.5rem;
    width: 250px;
    text-align: center;
    margin: 1rem auto;
  }

  @media screen and (max-width: ${props => props.theme.displays.tablet}) {
    width: 300px;
    padding-top: 5rem;
    padding-bottom: 2rem;
  }
`;

const Contact = () => (
  <Container id='contact'>
    <Survey>
      <p>
        We would love to hear your feedback! <br />
        Just drop us an email through the form to the right, or take the survey
        to tell us how we can improve.
      </p>
      <a href='https://docs.google.com/forms/d/11pOoyQBK0tvlfEY_zNqxRvvkz5O_ue-qHlmKTkX6kiI/viewform?edit_requested=true'>
        Take a Survey
      </a>
    </Survey>
    <form action='https://formspree.io/info@azur-agency.org' method='POST'>
      <Input type='text' name='name' placeholder='Your Name' />
      <Input type='email' name='_replyto' placeholder='Your Email' />
      <Textarea className='publicText' placeholder='Your Message' />
      <Button type='submit' name='Submit' />
    </form>
  </Container>
);

export default Contact;
