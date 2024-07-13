import { useState } from 'react';
import { Htag, Button, P, Tag, Rating  } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
      <>
          <Htag tag='h1'>text</Htag>
          <Button appearance='primary' arrow='right'>text</Button>
          <Button appearance='ghost' arrow='down'>text</Button>
          <P size='s'>Some s text</P>
          <P size='m'>Some m text</P>
          <P size='l'>Some l text</P>
          <Tag size='m' color='red'>This is a red tag</Tag>
          <Tag size='s' color='green'>This is a green tag</Tag>
          <Tag size='m' color='ghost'>This is a ghost tag</Tag>
          <Rating rating={rating} isEditable setRating={setRating}/>
      </>
  );
}

export default withLayout(Home)
