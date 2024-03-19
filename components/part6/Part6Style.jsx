import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 280vh;
  background-color: #ebebeb;

  .rounded-div-wrapper-6 {
    /* background-color: saddlebrown; */
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    /* margin-top: 100px; */
    z-index: 1;

    .rounded-div-6 {
      /* background-color: darkblue; */
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 150%;
      height: 750%;
      border-radius: 50%;
      background-color: #fff;
      transform: translate(-50%);
    }
  }

  .brand-part-6 {
    .top-brand-part-6 {
      display: flex;
      align-items: center;
      margin-top: 5vh;
      width: 100%;
      height: 20vh;
      border-top: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;

      .lft-top-6 {
        width: 50%;
        padding-left: 5vw;

        h1 {
          font-size: 5vw;
        }
      }

      .rght-top-6 {
        width: 50%;

        button {
          padding: 1.5vw 3vw;
          background-color: #d1d1d1;
          border: none;
          font-size: 1vw;
          border-radius: 50px;
        }
      }
    }

    .btm-brand-part-6 {
      width: 100%;
      display: flex;

      .lft-btm-6 {
        width: 50%;
      }

      .rght-btm-6 {
        height: 60vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 5vh;
        width: 50%;

        h2 {
          font-size: 2vw;
        }

        p {
          font-size: 1.5vw;
          color: #919191;
          line-height: 5vh;
        }
      }
    }
  }
`;
