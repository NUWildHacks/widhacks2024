import styled from 'styled-components';
import { Bold } from '../styles';
import { useState } from 'react';

const Container = styled.div`
  min-height: 1000px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookWrapper = styled.div`
  padding: 0.1rem 1rem 0.1rem 1rem;
  border: 2px solid black;
  width: 60vw;
  display: flex;
  flex-direction: row
`;

const Page = styled.div`
  padding: 1rem;
  border: 1px solid black;
  width: 30vw;
  height: 600px
`

const Question = styled.div`
  span {
    &:hover {
      cursor: pointer
    }
  }
  line-height: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &:nth-child(1) {
    margin-top: 0
  }
` // do some text styling plz

export default function Faq() {
  // TODO: Hook up the actual FAQs lol
  // Why this is not done: because the syntax is weird and
  // javascript gives not a single type hint.
  // Why is this not in TS ????
  const [activeQuestion, setActiveQuestion] = useState(-1);

  let temp_questions = ["A?", "B?", "C?", "D?", "This is a longer question to see if longer questions render?"];
  let temp_answers = ["A_answer", "B_answer", "C_answer", "D_answer", "This is a much longer answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet felis eget tempus pretium. Aliquam tortor lacus, placerat eget mi vitae, mollis accumsan libero. Duis malesuada ornare diam, nec viverra lorem scelerisque posuere. Phasellus mollis tincidunt sollicitudin. Quisque posuere nunc eget suscipit commodo. Curabitur vel massa et est pellentesque porttitor. Nulla ut tortor mauris. Aenean vitae eros vitae purus volutpat lacinia. Nunc mattis lacinia elementum. Maecenas rhoncus, dui at venenatis iaculis, nisi ex varius sem, eget sagittis massa dui ac erat. Fusce volutpat mauris odio. Aenean et ornare diam. Ut ipsum mauris, fringilla a efficitur nec, elementum eu ligula. Cras consequat congue lectus, vitae hendrerit turpis scelerisque ac. Aliquam quis ex id risus cursus rutrum. Etiam tristique erat sem, eu volutpat est pulvinar non."];

  if(temp_questions.length != temp_answers.length) {
    // explode
    console.error("bad")
  }

  return <Container id="faq">
    <BookWrapper>
      <Page>
        {temp_questions.map((element, index) => (
          <Question key={`question-${index}`}>
            <Bold onClick={() => setActiveQuestion(index)}>{element}</Bold>
          </Question>
        ))}
      </Page>
      <Page>
        {activeQuestion != -1 && <>
          <Question>
            <Bold>{temp_questions[activeQuestion]}</Bold>
          </Question>
          <Question>
            {temp_answers[activeQuestion]}
          </Question>
        </>}
      </Page>
    </BookWrapper>
  </Container>;
}
