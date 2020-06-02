import React from "react";
import styled from "styled-components";
import bgQuotes from "./../img/bg-quotes.png";

const SectionTestimoniWrapper = styled.section`
  background-color: hsl(218, 28%, 13%);
  padding-bottom: 100px;
  padding-top: 40px;
  .testimoni-wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    z-index: 9;
    ::before {
      content: "";
      background-image: url(${bgQuotes});
      background-repeat: no-repeat;
      position: absolute;
      top: -35px;
      left: -8px;
      z-index: -1;
      width: 100px;
      height: 100px;
    }
  }
  .card-item-testi {
    width: 31%;
    background-color: hsl(219, 30%, 18%);
    color: #ffffff;
    padding: 25px;
    border-radius: 4px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  }

  @media screen and (max-width: 768px) {
    .card-item-testi {
      width: 100%;
      margin-bottom: 25px;
    }
  }
`;

const SectionTestimoni = () => {
  return (
    <SectionTestimoniWrapper>
      <div className="testimoni-wrapper">
        <div className="card-item-testi">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi nostrum quas
            aut iste aperiam vel et odio? Laborum, quae!
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>Name</div>
            <div>Jabatan</div>
          </div>
        </div>
        <div className="card-item-testi">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi nostrum quas
            aut iste aperiam vel et odio? Laborum, quae!
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>Name</div>
            <div>Jabatan</div>
          </div>
        </div>
        <div className="card-item-testi">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi nostrum quas
            aut iste aperiam vel et odio? Laborum, quae!
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>Name</div>
            <div>Jabatan</div>
          </div>
        </div>
      </div>
    </SectionTestimoniWrapper>
  );
};

export default SectionTestimoni;
