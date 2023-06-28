import { React, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { BsEmojiSmileFill } from "react-icons/bs";
import "./CreatePostModel.css";

const CreatePostModel = ({ onClose, isOpen }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect();
    setIsDragOver(true);
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file[0];
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  };
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type.startsWith("image/") || file.type.startsWith("video/"))
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert(
        "You can only upload an image or a video! Select either image/video"
      );
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div>
      <Modal size="md" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
    maxW="70vw" // Set the maximum width of the modal
    maxH="80vh" // Set the maximum height of the modal
    overflowY="hidden" // Enable vertical scrolling if the content exceeds the height
    overflowX="hidden" 
  >
          <center>
            <div
              style={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                border: "1px solid lightgray",
                marginTop: "10vh",
                width: "60vw",
                height: "10vh",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                paddingLeft: "10px",
                paddingRight: "10px",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Create new post</p>
              <Button
                style={{ display: "inline-flex", color: "blue" }}
                variant={"ghost"}
                size="sm"
                colorScheme={"blue"}
              >
                Share
              </Button>
            </div>
            {/* <hr/> */}
          </center>

          <ModalBody>
            <center>
              <div
                style={{
                  border: "1px solid lightgray",
                  width: "60vw",
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "5px",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    padding: "10px",
                  }}
                >
                  {!file && (
                    <div
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      className="drag-drop"
                    >
                      <div>
                        <br />
                        <MdOutlineAddPhotoAlternate
                          style={{ fontSize: "3rem", lineHeight: "1" }}
                        />
                        <p>Add photos or videos</p>
                        <br />
                      </div>
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload"
                      >
                        Select from Computer
                      </label>
                      <input
                        type="file"
                        id="file-upload"
                        accept="image/*, video/*"
                        onChange={handleOnChange}
                        className="fileInput"
                      />
                    </div>
                  )}

                  {file && (
                    <img
                      style={{ paddingRight:'15vw',maxHeight: "35vh", maxWidth: "35vw" }}
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                  )}
                </div>
                <div
                  style={{
                    width: "1px",
                    border: "1px solid lightgray",
                    height: "100%",
                    marginRight: "50px",
                  }}
                ></div>
                <div
                  style={{
                    width: "50px",
                    marginTop: "0px",
                    marginRight: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "1vh",
                      marginLeft: "1vw",
                    }}
                  >
                    <img
                      style={{
                        marginRight: "0.5vw",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                      src="https://images.unsplash.com/photo-1631646200949-e62c697abb4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                      alt="profilePic"
                    />
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        marginBottom: "0px",
                      }}
                    >
                      username
                    </p>
                  </div>

                  {/* <div style={{backgroundColor:'green'}}> */}
                  <div>
                    <textarea
                      style={{
                        width: "14vw",
                        marginRight: "10vw",
                        marginLeft: "1vw",
                        marginTop: "2vh",
                        height: "30vh",
                        border: "1px solid lightgray",
                      }}
                      placeholder="Write your caption"
                      className="captionIp"
                      name="caption"
                      rows="8"
                      onChange={handleCaptionChange}
                    ></textarea>
                  </div>

                  <div
                    style={{
                      borderBottom: "",
                      opacity: "70%",
                      display: "flex",
                      justifyContent: "space-between",
                      paddingLeft: "2px",
                      paddingRight: "2px",
                      marginLeft: "1vw",
                      width: "13vw",
                      border: "1px solid lightgray",
                    }}
                  >
                    <BsEmojiSmileFill
                      style={{
                        width: "10vw",
                        height: "20px",
                        marginLeft: "-4vw",
                        marginTop:'0.5vh'
                      }}
                    />
                    <p>{caption?.length} / 2,200</p>
                  </div>
                </div>
              </div>
            </center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModel;
