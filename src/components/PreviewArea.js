import React from "react";
import './PreviewArea.css'
import CatSprite from "./CatSprite";
import { BsWindowSidebar } from 'react-icons/bs'
import { MdOutlineZoomOutMap } from 'react-icons/md'
import { Container, Button, Link } from 'react-floating-action-button'

export default function PreviewArea() {
  return (
    <div>
      <div className="icons"><BsWindowSidebar style={{ fontSize: '1.5rem', color: 'lightgray' }} /> <BsWindowSidebar style={{ marginLeft: '1rem', fontSize: '1.5rem', color: 'lightgray' }} /> <MdOutlineZoomOutMap style={{ marginLeft: '1rem', fontSize: '1.5rem' }} /> </div>

      <div className="flex-none h-full overflow-y-auto p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5rem', marginTop: '-7rem' }}>
        <CatSprite />
      </div>

      {/* <div id="fab-action">
        <Container>
          <Link href=" https://scratch.mit.edu/projects/editor/ "
            tooltip="Upload a sprite"
            icon="far fa-sticky-note" />
          <Link href=" https://scratch.mit.edu/projects/editor/ "
            tooltip="Surprise"
            icon="far fa-sticky-note" />
          <Link href=" https://scratch.mit.edu/projects/editor/ "
            tooltip="Paint"
            icon="fas fa-user-plus" />
          <Link href=" https://scratch.mit.edu/projects/editor/ "
            tooltip="Choose a sprite"
            icon="fas fa-user-plus" />
          <Button
            tooltip="Choose the sprite"
            icon="fas fa-plus"
            rotate={true} />
        </Container>
      </div> */}

    </div>
  );
}
