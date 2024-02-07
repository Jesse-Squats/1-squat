// ./app/page.tsx

import {
  FrameContainer,
  FrameImage,
  FrameButton,
  useFramesReducer,
  getPreviousFrame,
  validateActionSignature,
  FrameInput,
} from "frames.js/next/server";

const reducer = (state, action) => ({ count: state.count + 1 });

export default async function Home(props) {
  const previousFrame = getPreviousFrame(props.searchParams);
  const frameMessage = await getFrameMessage(previousFrame.postBody);

  if (frameMessage && !frameMessage?.isValid) {
    throw new Error("Invalid frame payload");
  }
  const [state, dispatch] = useFramesReducer(
    reducer,
    { count: 0 },
    previousFrame
  );

  return (
    <FrameContainer
      postUrl="/frames"
      state={state}
      previousFrame={previousFrame}
    >
      <FrameImage src="https://picsum.photos/seed/frames.js/1146/600" />
      <FrameButton onClick={dispatch}>{state.count}</FrameButton>
    </FrameContainer>
  );
}
