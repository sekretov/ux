import React from 'react';
import File from './File';
import { Row, Col } from '@lskjs/ui/Grid';
import Story from '@lskjs/dev/Story';

const urls = [
  'https://i.imgur.com/7UGNCWK.jpg',
  'http://shiz.co/beatlescode/assets/hereComesTheSun.mp3',
  'http://techslides.com/demos/sample-videos/small.mp4',
  'http://www.snee.com/xml/xslt/sample.doc',
  'https://www.cmu.edu/blackboard/files/evaluate/tests-example.xls',
  'https://www.w3.org/TR/PNG/iso_8859-1.txt',
  'https://google.com',
];

export default ({ storiesOf }) => (
  storiesOf('Form2/components/File', module)
    .add('Image', () => (
      <Story>
        <File url={urls[0]} />
      </Story>
    ))
    .add('Music', () => (
      <Story>
        <File url={urls[1]} />
      </Story>
    ))
    .add('Video', () => (
      <Story>
        <File url={urls[2]} />
      </Story>
    ))
    .add('Word', () => (
      <Story>
        <File url={urls[3]} />
      </Story>
    ))
    .add('Table', () => (
      <Story>
        <File url={urls[4]} />
      </Story>
    ))
    .add('Document', () => (
      <Story>
        <File url={urls[5]} />
      </Story>
    ))
    .add('Other', () => (
      <Story>
        <File url={urls[6]} />
      </Story>
    ))
    .add('Multiple', () => (
      <Story>
        <Row vertical gap={8}>
          {urls.map((e, i) => (
            <Col key={i} sm={4}> {/* eslint-disable-line react/no-array-index-key */}
              <File url={e} />
            </Col>
          ))}
        </Row>
      </Story>
    ))
);