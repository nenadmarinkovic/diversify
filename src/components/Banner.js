import React from "react";
import {
  BannerContainer,
  MainText,
  SubText,
  Text,
  Illustration,
  Button,
  BannerImage,
} from "../styles/Banner";
import ScrollIntoView from "react-scroll-into-view";
import bannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <>
      <div className="container">
        <BannerContainer>
          <Text>
            <MainText>
              Accelerating growth by diversifying the industry
            </MainText>
            <SubText>
              Our mission is to connect technology companies with
              high-performing female professionals for leadership roles,
              particularly in the fields of Product and Engineering. Since our
              core values are gender equality and diversity, our emphasis is on
              female professionals.
            </SubText>

            <ScrollIntoView
              style={{ display: "inline" }}
              selector="#options"
              smooth={true}
            >
              <Button>Get connected</Button>
            </ScrollIntoView>
          </Text>

          <Illustration>
            <svg
              width="576"
              height="576"
              viewBox="0 0 576 576"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M406.774 1.13801C396.274 4.63801 386.774 15.238 384.574 25.938C380.274 46.538 400.874 67.138 421.474 62.838C436.974 59.638 448.974 43.838 447.474 28.938C446.374 18.438 438.474 7.63801 428.474 2.73801C422.374 -0.161991 412.974 -0.861992 406.774 1.13801Z"
                  fill="#5A57CA"
                />
                <path
                  d="M534.774 1.13801C524.274 4.63801 514.774 15.238 512.574 25.938C508.274 46.538 528.874 67.138 549.474 62.838C564.974 59.638 576.974 43.838 575.474 28.938C574.374 18.438 566.474 7.63801 556.474 2.73801C550.374 -0.161992 540.974 -0.861991 534.774 1.13801Z"
                  fill="#ED572F"
                />
                <path
                  d="M406.774 129.138C396.274 132.638 386.774 143.238 384.574 153.938C380.274 174.538 400.874 195.138 421.474 190.838C436.974 187.638 448.974 171.838 447.474 156.938C446.374 146.438 438.474 135.638 428.474 130.738C422.374 127.838 412.974 127.138 406.774 129.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M534.774 129.138C524.274 132.638 514.774 143.238 512.574 153.938C508.274 174.538 528.874 195.138 549.474 190.838C564.974 187.638 576.974 171.838 575.474 156.938C574.374 146.438 566.474 135.638 556.474 130.738C550.374 127.838 540.974 127.138 534.774 129.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M22.7741 385.138C12.2741 388.638 2.7741 399.238 0.574096 409.938C-3.72591 430.538 16.8741 451.138 37.4741 446.838C52.9741 443.638 64.9741 427.838 63.4741 412.938C62.3741 402.438 54.4741 391.638 44.4741 386.738C38.3741 383.838 28.9741 383.138 22.7741 385.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M150.774 385.138C140.274 388.638 130.774 399.238 128.574 409.938C124.274 430.538 144.874 451.138 165.474 446.838C180.974 443.638 192.974 427.838 191.474 412.938C190.374 402.438 182.474 391.638 172.474 386.738C166.374 383.838 156.974 383.138 150.774 385.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M278.774 385.138C268.274 388.638 258.774 399.238 256.574 409.938C252.274 430.538 272.874 451.138 293.474 446.838C308.974 443.638 320.974 427.838 319.474 412.938C318.374 402.438 310.474 391.638 300.474 386.738C294.374 383.838 284.974 383.138 278.774 385.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M406.774 385.138C396.274 388.638 386.774 399.238 384.574 409.938C380.274 430.538 400.874 451.138 421.474 446.838C436.974 443.638 448.974 427.838 447.474 412.938C446.374 402.438 438.474 391.638 428.474 386.738C422.374 383.838 412.974 383.138 406.774 385.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M534.774 385.138C524.274 388.638 514.774 399.238 512.574 409.938C508.274 430.538 528.874 451.138 549.474 446.838C564.974 443.638 576.974 427.838 575.474 412.938C574.374 402.438 566.474 391.638 556.474 386.738C550.374 383.838 540.974 383.138 534.774 385.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M22.7741 513.138C12.2741 516.638 2.77409 527.238 0.574096 537.938C-3.72591 558.538 16.8741 579.138 37.4741 574.838C52.9741 571.638 64.9741 555.838 63.4741 540.938C62.3741 530.438 54.4741 519.638 44.4741 514.738C38.3741 511.838 28.9741 511.138 22.7741 513.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M150.774 513.138C140.274 516.638 130.774 527.238 128.574 537.938C124.274 558.538 144.874 579.138 165.474 574.838C180.974 571.638 192.974 555.838 191.474 540.938C190.374 530.438 182.474 519.638 172.474 514.738C166.374 511.838 156.974 511.138 150.774 513.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M278.774 513.138C268.274 516.638 258.774 527.238 256.574 537.938C252.274 558.538 272.874 579.138 293.474 574.838C308.974 571.638 320.974 555.838 319.474 540.938C318.374 530.438 310.474 519.638 300.474 514.738C294.374 511.838 284.974 511.138 278.774 513.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M406.774 513.138C396.274 516.638 386.774 527.238 384.574 537.938C380.274 558.538 400.874 579.138 421.474 574.838C436.974 571.638 448.974 555.838 447.474 540.938C446.374 530.438 438.474 519.638 428.474 514.738C422.374 511.838 412.974 511.138 406.774 513.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M534.774 513.138C524.274 516.638 514.774 527.238 512.574 537.938C508.274 558.538 528.874 579.138 549.474 574.838C564.974 571.638 576.974 555.838 575.474 540.938C574.374 530.438 566.474 519.638 556.474 514.738C550.374 511.838 540.974 511.138 534.774 513.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M22.7741 1.13801C12.2741 4.63801 2.77409 15.238 0.574096 25.938C-3.72591 46.538 16.8741 67.138 37.4741 62.838C52.9741 59.638 64.9741 43.838 63.4741 28.938C62.3741 18.438 54.4741 7.63801 44.4741 2.73801C38.3741 -0.161992 28.9741 -0.861991 22.7741 1.13801Z"
                  fill="#ED572F"
                />
                <path
                  d="M150.774 1.13789C135.674 6.13789 125.474 22.7379 128.574 37.3379C131.074 49.2379 142.174 60.3379 153.974 62.8379C173.374 66.9379 193.474 48.6379 191.474 28.9379C190.374 18.4379 182.474 7.63789 172.474 2.73789C166.374 -0.162112 156.974 -0.862112 150.774 1.13789Z"
                  fill="#5A57CA"
                />
                <path
                  d="M278.774 1.13801C268.274 4.63801 258.774 15.238 256.574 25.938C252.274 46.538 272.874 67.138 293.474 62.838C308.974 59.638 320.974 43.838 319.474 28.938C318.374 18.438 310.474 7.63801 300.474 2.73801C294.374 -0.161992 284.974 -0.861991 278.774 1.13801Z"
                  fill="#ED572F"
                />
                <path
                  d="M22.7741 129.138C12.2741 132.638 2.77409 143.238 0.574096 153.938C-3.72591 174.538 16.8741 195.138 37.4741 190.838C52.9741 187.638 64.9741 171.838 63.4741 156.938C62.3741 146.438 54.4741 135.638 44.4741 130.738C38.3741 127.838 28.9741 127.138 22.7741 129.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M150.774 129.138C135.674 134.138 125.474 150.738 128.574 165.338C131.074 177.238 142.174 188.338 153.974 190.838C173.374 194.938 193.474 176.638 191.474 156.938C190.374 146.438 182.474 135.638 172.474 130.738C166.374 127.838 156.974 127.138 150.774 129.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M278.774 129.138C268.274 132.638 258.774 143.238 256.574 153.938C252.274 174.538 272.874 195.138 293.474 190.838C308.974 187.638 320.974 171.838 319.474 156.938C318.374 146.438 310.474 135.638 300.474 130.738C294.374 127.838 284.974 127.138 278.774 129.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M22.7741 257.138C12.2741 260.638 2.7741 271.238 0.574096 281.938C-3.72591 302.538 16.8741 323.138 37.4741 318.838C52.9741 315.638 64.9741 299.838 63.4741 284.938C62.3741 274.438 54.4741 263.638 44.4741 258.738C38.3741 255.838 28.9741 255.138 22.7741 257.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M150.774 257.138C140.274 260.638 130.774 271.238 128.574 281.938C124.274 302.538 144.874 323.138 165.474 318.838C180.974 315.638 192.974 299.838 191.474 284.938C190.374 274.438 182.474 263.638 172.474 258.738C166.374 255.838 156.974 255.138 150.774 257.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M278.774 257.138C268.274 260.638 258.774 271.238 256.574 281.938C252.274 302.538 272.874 323.138 293.474 318.838C308.974 315.638 320.974 299.838 319.474 284.938C318.374 274.438 310.474 263.638 300.474 258.738C294.374 255.838 284.974 255.138 278.774 257.138Z"
                  fill="#ED572F"
                />
                <path
                  d="M406.774 257.138C396.274 260.638 386.774 271.238 384.574 281.938C380.274 302.538 400.874 323.138 421.474 318.838C436.974 315.638 448.974 299.838 447.474 284.938C446.374 274.438 438.474 263.638 428.474 258.738C422.374 255.838 412.974 255.138 406.774 257.138Z"
                  fill="#5A57CA"
                />
                <path
                  d="M534.774 257.138C524.274 260.638 514.774 271.238 512.574 281.938C508.274 302.538 528.874 323.138 549.474 318.838C564.974 315.638 576.974 299.838 575.474 284.938C574.374 274.438 566.474 263.638 556.474 258.738C550.374 255.838 540.974 255.138 534.774 257.138Z"
                  fill="#ED572F"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="576" height="576" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <BannerImage src={bannerImage} alt="Diverse team" />
          </Illustration>
        </BannerContainer>
      </div>
    </>
  );
}

export default Banner;
