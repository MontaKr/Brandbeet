import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #fff;

  .top-part-3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0vw 3vw;
    position: absolute;
    top: -15vh;
    width: 100%;
    height: 15v;
    /* background-color: aqua; */

    h4 {
      font-size: 1.5vw;
      opacity: 0.5;
    }

    .cta {
      display: flex;
      gap: 1vw;

      .cta-book {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #000;
        border-radius: 50px;
        padding: 1.5vw 3vw;
        cursor: pointer;

        &:hover h2:nth-child(1) {
          margin-top: -4vh;
        }

        .cta-text {
          /* background-color: rebeccapurple; */
          height: 4vh;
          color: #fff;
          overflow: hidden;

          h2 {
            transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
          }
        }
      }

      .cta-book-2 {
        background-color: #d1d1d1;

        .cta-text {
          color: #000;
        }
      }
    }
  }

  .btm-part-3 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 15vh;
    background-color: #000;
  }
`;
