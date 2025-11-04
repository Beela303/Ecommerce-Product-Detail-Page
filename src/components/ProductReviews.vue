<template>
  <div id="product-reviews">
    <h2>Product Reviews</h2>

    <div id="top-rating">
      <div id="left">
        <div id="circular-progressbar">
          <p>4.5</p>
        </div>

        <div id="star-reviews">
          <p><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span
              class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span><span
              class="material-symbols-outlined">star</span></p>
          <p>from 125k reviews</p>
        </div>

      </div>

      <div id="right">
        <ul>
          <li>5.0<span class="material-symbols-outlined">star</span>
            <progress max="100" value="80"></progress> 2823
          </li>
          <li>4.0<span class="material-symbols-outlined">star</span>
            <progress max="100" value="50"></progress> 38
          </li>
          <li>3.0<span class="material-symbols-outlined">star</span>
            <progress max="100" value="30"></progress> 4
          </li>
          <li>2.0<span class="material-symbols-outlined">star</span>
            <progress max="100" value="0"></progress> 0
          </li>
          <li>1.0<span class="material-symbols-outlined">star</span>
            <progress max="100" value="0"></progress> 0
          </li>
        </ul>
      </div>
    </div>

    <div id="div">
      <div id="left">
        <div id="reviews-filter">
          <h3>Reviews Filter</h3>

          <div id="rating">
            <div id="rating-heading">
              <h3>Rating</h3>
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </div>
            <ul>
              <li><input type="checkbox" name="" id=""><span class="material-symbols-outlined">star</span>5</li>
              <li><input type="checkbox" name="" id=""><span class="material-symbols-outlined">star</span>4</li>
              <li><input type="checkbox" name="" id=""><span class="material-symbols-outlined">star</span>3</li>
              <li><input type="checkbox" name="" id=""><span class="material-symbols-outlined">star</span>2</li>
              <li><input type="checkbox" name="" id=""><span class="material-symbols-outlined">star</span>1</li>
            </ul>
          </div>

          <div id="review-topic">
            <div id="review-topic-heading">
              <h3>Review Topics</h3>
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </div>

            <ul>
              <li><input type="checkbox" name="" id="">Product Quality</li>
              <li><input type="checkbox" name="" id="">Seller Services</li>
              <li><input type="checkbox" name="" id="">Product Price</li>
              <li><input type="checkbox" name="" id="">Shipment</li>
              <li><input type="checkbox" name="" id="">Match With Description</li>
            </ul>
          </div>
        </div>

      </div>

      <div id="right">
        <h3>Review Lists</h3>

        <div id="tabs">
          <button type="button">All Reviews</button>
          <button type="button">With Photo & Video</button>
          <button type="button">With Description</button>
        </div>

        <div id="all-reviews">

          <div class="individual-review">
            <div class="stars">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>

            <p class="title">This is an amazing product I have.</p>
            <p class="date">July 2, 2020 03:29PM</p>

            <div class="individual">
              <div class="profile">
                <img src="../Brown Aesthetic.jpg" alt="">
                <p class="name">Derrel Steward</p>
              </div>

              <div class="like-comment">
                <p><span class="material-symbols-outlined">thumb_up</span>128</p>
                <p><span class="material-symbols-outlined">thumb_down</span></p>
              </div>
            </div>
          </div>

          <div class="individual-review">
            <div class="stars">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>

            <p class="title">This is an amazing product I have.</p>
            <p class="date">July 2, 2020 01:04PM</p>

            <div class="individual">
              <div class="profile">
                <img src="../Brown Aesthetic.jpg" alt="">
                <p class="name">Darlene Robertson</p>
              </div>

              <div class="like-comment">
                <p><span class="material-symbols-outlined">thumb_up</span>82</p>
                <p><span class="material-symbols-outlined">thumb_down</span></p>
              </div>
            </div>
          </div>

          <div class="individual-review">
            <div class="stars">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>

            <p class="title">This is an amazing product I have.</p>
            <p class="date">July 2, 2020 10:03PM</p>

            <div class="individual">
              <div class="profile">
                <img src="../Brown Aesthetic.jpg" alt="">
                <p class="name">Kathryn Murphy</p>
              </div>

              <div class="like-comment">
                <p><span class="material-symbols-outlined">thumb_up</span>9</p>
                <p><span class="material-symbols-outlined">thumb_down</span></p>
              </div>
            </div>
          </div>

          <div class="individual-review">
            <div class="stars">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>

            <p class="title">This is an amazing product I have.</p>
            <p class="date">July 7, 2020 10:14PM</p>

            <div class="individual">
              <div class="profile">
                <img src="../Brown Aesthetic.jpg" alt="">
                <p class="name">Ronald Richards</p>
              </div>

              <div class="like-comment">
                <p><span class="material-symbols-outlined">thumb_up</span>124</p>
                <p><span class="material-symbols-outlined">thumb_down</span></p>
              </div>
            </div>
          </div>

        </div>

        <div id="buttons">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">...</button>
          <button type="button">19</button>
          <button type="button"><span class="material-symbols-outlined">keyboard_arrow_right</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#product-reviews {
  margin: 0 0 100px 100px;

  h2 {
    color: var(--BLACK03);

    margin-bottom: 24px;

    font-size: 28px;
    font-weight: 600;
    line-height: 120%;
  }

  #top-rating {
    width: 95%;
    padding: 24px;

    border-radius: 8px;
    border: 0.8px dashed var(--BORDER01);

    display: flex;

    #left {
      width: 30%;

      display: flex;

      #circular-progressbar {
        //background: var(--GRAY01);

        width: 84px;
        height: 84px;

        margin-right: 15px;

        border: 4px solid var(--ORANGE);
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        p {
          color: var(--BLACK01);

          font-size: 20px;
          font-weight: 600;

          line-height: 140%;
        }
      }

      #star-reviews {
        span {
          color: var(--ORANGE);

          width: 16px;
          height: 16px;

          margin-right: 1.74px;

          &:last-child {
            margin-right: 0;
          }
        }

        p {
          color: var(--GRAY02);

          margin-top: 8px;

          font-size: 16px;
          font-weight: 400;

          line-height: 160%;
        }
      }
    }

    #right {
      margin-right: 5%;

      ul {

        li {
          color: var(--BLACK01);

          margin-bottom: 12px;

          font-size: 16px;
          font-weight: 500;

          line-height: 160%;

          &:last-child {
            margin-bottom: 24px;
          }

          span {
            color: var(--ORANGE);

            width: 16px;
            height: 16px;

            margin-left: 3px;
            margin-right: 4px;
          }

          progress {
            color: var(--BLACK02) !important;
            background-color: var(--GRAY01);

            width: 669px;
            height: 8px;

            margin-right: 23.5px;
            border-radius: 8px;
          }
        }
      }
    }
  }

  #div {
    width: 95%;

    margin-top: 24px;
    //margin-left: 40px;

    border: 0.5px dashed var(--BORDER02);

    display: flex;

    #left {
      width: 30%;
      padding: 24px;

      #reviews-filter {
        h3 {
          color: var(--BLACK02);

          margin-top: 24px;
          margin-bottom: 16px;

          border-bottom: 0.5px dashed var(--BORDER02);

          font-size: 20px;
          font-weight: 600;

          line-height: 140%;
          letter-spacing: -0.2px;
        }

        #rating {
          margin-bottom: 24px;
          border-bottom: 0.5px dashed var(--BORDER02);

          #rating-heading {
            display: flex;
            justify-content: space-between;

            h3 {
              color: var(--BLACK03);

              margin-bottom: 18px;

              font-size: 16px;
              font-weight: 600;

              //line-height: 140%;
              letter-spacing: -0.2px;
            }

            span {
              color: var(--BLACK01);

              width: 8px;
              height: 3.5px;
            }
          }

          ul {
            li {
              color: var(--GRAY03);

              margin-bottom: 12px;

              font-size: 16px;
              font-weight: 600;

              line-height: 160%;

              display: flex;

              &:last-child {
                margin-bottom: 0;
              }

              input {
                width: 24px;
                height: 24px;

                margin-right: 10px;
              }

              span {
                color: var(--ORANGE);

                width: 15px;
                height: 15px;

                margin-right: 15px;
              }
            }
          }
        }

        #review-topic {
          margin-top: 24px;

          #review-topic-heading {
            display: flex;
            justify-content: space-between;

            h3 {
              color: var(--BLACK03);

              margin-bottom: 12px;

              font-size: 16px;
              font-weight: 600;

              //line-height: 140%;
              letter-spacing: -0.2px;
            }

            span {
              color: var(--BLACK01);

              width: 12px;
              height: 12px;
            }
          }

          ul {

            li {
              color: var(--GRAY03);

              margin-bottom: 12px;

              font-size: 16px;
              font-weight: 600;

              //line-height: 160;

              &:last-child {
                margin-bottom: 0;
              }

              input {
                color: var(--GRAY04);

                width: 18px;
                height: 18px;

                margin-right: 10px;
                border-radius: 1.5px;
              }
            }
          }
        }
      }
    }

    #right {
      margin-right: 5%;

      h3 {
        color: var(--BLACK02);

        margin-top: 24px;
        margin-bottom: 16px;
      }

      #tabs {
        margin-bottom: 34px;

        display: flex;

        button {
          color: var(--BLACK03);

          width: 152px;
          height: 42px;

          margin-right: 12px;

          font-size: 14px;
          font-weight: 500;

          line-height: 160%;

          border: 1px solid var(--WHITE01);
          border-radius: 8px;

          text-align: center;
          justify-content: center;

          &:first-child {
            background-color: var(--WHITE02);

            width: 110px;

            font-size: 14px;
            font-weight: 500;

            line-height: 160%;

            border: 1px solid var(--BORDER03);
          }
        }
      }

      #all-reviews {
        .individual-review {
          .stars {
            display: flex;

            span {
              color: var(--ORANGE);

              width: 16.5px;
              height: 16.5px;

              margin-right: 1.74px;
              margin-bottom: 16px;
            }
          }

          .title {
            color: var(--BLACK03);

            margin-bottom: 4px;

            font-size: 18px;
            font-weight: 600;

            line-height: 140%;
          }

          .date {
            color: var(--GRAY03);

            margin-bottom: 24px;

            font-size: 16px;
            font-weight: 400;

            line-height: 160%;
          }

          .individual {
            margin-bottom: 32px;

            border: 0.5px dashed var(--BORDER02);

            display: flex;
            justify-content: space-between;

            &:last-child {
              border: 0;
            }

            .profile {
              display: flex;

              img {
                width: 32px;
                height: 32px;
              }

              .name {
                color: var(--BLACK01);

                font-size: 16px;
                font-weight: 500;

                line-height: 160%;
              }
            }

            .like-comment {
              display: flex;

              p {
                color: var(--BLACK01);

                width: 80px;
                height: 50px;

                margin-right: 5px;

                font-size: 16px;
                font-weight: 400;

                //line-height: 160%;

                padding: 12px;
                border: 1px solid var(--GRAY01);

                span {
                  width: 5px;
                  height: 14px;


                  //&:first-child {
                  //color: var(--BLACK03);
                  //}
                }
              }

              p:last-child {
                width: 48px;
                height: 50px;

                padding: 12px;

                border: 1px solid var(--GRAY01);

                span {
                  color: var(--BLACK01);

                  width: 24px;
                  height: 24px;
                }
              }
            }
          }

        }
      }

      #buttons {
        margin-top: 32px;
        margin-bottom: 80px;

        display: flex;
        justify-content: center;
        text-align: center;

        button {
          color: var(--GRAY05);

          width: 44px;
          height: 44px;

          margin-right: 8px;

          font-size: 14px;
          font-weight: 500;

          line-height: 160%;

          border-radius: 8px;
          border: 1px solid var(--GRAY01);

          &:first-child {
            color: var(--BLACK03);
            background: var(--WHITE01);

            border: 1px solid var(--BORDER02);
          }

          span {
            color: var(--BLACK03);

            width: 15px;
            height: 7px;
          }
        }
      }
    }
  }
}
</style>
