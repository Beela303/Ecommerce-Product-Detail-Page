<template>
  <footer>

    <div id="div">
      <div id="left">
        <img src="../assets/logo-john-lewis.png" alt="" />

        <div id="search-box">
          <input type="search" name="" id="" placeholder="Get latest offers to your inbox">
          <button type="button"><span class="material-symbols-outlined">keyboard_arrow_right</span></button>
        </div>

        <div id="socials">
          <ul>
            <li><a href="http://facebook.com/" target="_blank" rel="noopener noreferrer"><span
                  class="material-symbols-outlined">keyboard_arrow_right</span></a></li>
            <li><a href="http://instagram.com/beela303/" target="_blank" rel="noopener noreferrer"><span
                  class="material-symbols-outlined">keyboard_arrow_right</span></a></li>
            <li><a href="http://x.com/beela303" target="_blank" rel="noopener noreferrer"><span
                  class="material-symbols-outlined">keyboard_arrow_right</span></a></li>
            <li><a href="mailto:nabilaabubakar333@gmail.com"><span class="material-symbols-outlined">mail</span></a>
            </li>
          </ul>
        </div>
      </div>

      <div id="right">
        <ul>
          <li>Shop</li>
          <li><a href="/">My Account</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/">Wishlist</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
        <ul>
          <li>Information</li>
          <li><a href="/">Shipping Policy</a></li>
          <li><a href="/">Return & Refunds</a></li>
          <li><a href="/">Cookies Policy</a></li>
          <li><a href="/">Frequently asked</a></li>
        </ul>
        <ul>
          <li>Company</li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Terms & Conditions</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div id="bottom">
      <p id="copyright"><span class="material-symbols-outlined">copyright</span>John Lewis plc 2001-2024</p>

      <div id="lang-currency">
        <img src="../Brown Aesthetic.jpg" alt="">
        <p id="lang">English<span class="material-symbols-outlined">keyboard_arrow_up</span></p>
        <p id="currency">USD<span class="material-symbols-outlined">keyboard_arrow_up</span></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--GRAY06);

  padding: 72px 0 127px 127px;

  #div {
    display: flex;
    justify-content: space-around;

    padding-left: 29px;
    padding-right: 29px;

    margin-bottom: 72px;

    #left {
      //margin-right: 259px;

      img {
        margin-bottom: 40px;
      }

      #search-box {
        margin-bottom: 25px;

        display: flex;

        input {
          color: var(--GRAY07);

          width: 214px;
          height: 26px;

          margin-right: 32px;
          border-radius: 25px;

          font-size: 16px;
          font-weight: 500;

          line-height: 160%;
          letter-spacing: 1%;
        }

        button {
          color: var(--WHITE01);
          background: var(--BLACK03);

          width: 52px;
          height: 36px;

          border-radius: 8px;
        }
      }

      #socials {
        ul {
          display: flex;

          li {
            color: var(--BLACK04);
            background: var(--WHITE01);

            width: 36px;
            height: 36px;

            margin-right: 11px;

            border-radius: 100px;

            &:last-child {
              margin-right: 0;
            }

            a {
              span {
                width: 8px;
                height: 13px;
              }
            }
          }
        }
      }
    }

    #right {
      display: flex;

      ul {
        margin-right: 50px;

        li {
          color: var(--BLACK03);

          margin-bottom: 12px;

          font-size: 14px;
          font-weight: 400;

          line-height: 22px;

          &:first-child {
            color: var(--BLACK04);

            margin-bottom: 16px;

            font-size: 14px;
            font-weight: 600;

            line-height: 24px;
          }

          &:last-child {
            margin-bottom: 0;
          }

          a {
            color: var(--BLACK03);
          }
        }
      }
    }
  }

  #bottom {
    margin-top: 24px;
    //margin-bottom: 29px;
    margin-left: 156px;
    margin-right: 156px;

    border-top: 1px dashed var(--BORDER02);

    display: flex;
    justify-content: space-between;

    #copyright {
      color: var(--TEXT-BLUE);

      margin-top: 24px;

      font-size: 14px;
      font-weight: 400;

      line-height: 22px;

      display: flex;
    }

    #lang-currency {
      margin-top: 24px;

      display: flex;

      img {
        width: 25px;
        height: 14px;
      }

      #lang {
        color: var(--BLACK04);

        margin-left: 5px;
        margin-right: 10px;

        font-size: 14px;
        font-weight: 500;

        line-height: 24px;

        display: flex;

        span {
          width: 9px;
          height: 4.5px;
        }
      }

      #currency {
        color: var(--BLACK04);

        font-size: 14px;
        font-weight: 500;

        line-height: 24px;

        display: flex;

        span {
          width: 9px;
          height: 4.5px;
        }
      }
    }
  }
}
</style>
