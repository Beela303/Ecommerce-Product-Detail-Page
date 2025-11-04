<!--<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { fetchProduct } from '@/services/apiService';

interface User {
  id: number;
  name: string;
  email: string;
}

export default defineComponent({
  name: 'ProductInfo',
  setup() {
    const product = ref<User[]>([]);
    const isLoading = ref<boolean>(true);
    const error = ref<string | null>(null);

    const loadProduct = async () => {
      try {
        product.value = await fetchProduct();
      } catch (err) {
        error.value = 'Failed to fetch product.';
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      loadProduct();
    });

    return {
      product,
      isLoading,
      error,
    };
  },
});
</script> -->

<template>
  <div id="product">
    <div id="left">
      <div id="pictures">
        <div id="first-div">
          <img src="../Brown Aesthetic.jpg" alt="" />

          <div id="icons">
            <ul>
              <li><span class="material-symbols-outlined">upload</span></li>
              <li><span class="material-symbols-outlined">favorite</span></li>
            </ul>
            <ul>
              <li><span class="material-symbols-outlined">keyboard_arrow_left</span></li>
              <li><span class="material-symbols-outlined">keyboard_arrow_right</span></li>
            </ul>
          </div>
        </div>

        <div id="other-images">
          <img src="../Brown Aesthetic.jpg" alt="" />
          <img src="../Brown Aesthetic.jpg" alt="" />
          <img src="../Brown Aesthetic.jpg" alt="" />
          <img src="../Brown Aesthetic.jpg" alt="" />
        </div>

      </div>
    </div>

    <div id="right">
      <small id="collection-name">John Lewis ANYDAY</small>

      <h2 id="product-name">Long Sleeve OverShirt, Khaki, 6</h2>

      <div id="price-rating">
        <div id="price">
          <ul>
            <li id="discount-price">£40.00</li>
            <li>£28.00</li>
          </ul>
        </div>
        <div id="rating">
          <ul>
            <li>1,238 sold .</li>
            <li><span class="material-symbols-outlined">star</span>4.5</li>
          </ul>
        </div>
      </div>

      <div id="description">
        <h3 id="desc-title">Description:</h3>
        <p>Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis
          1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro
          sapiuntur. Boba phaenomenon. <span>See More....</span>
        </p>
      </div>

      <div id="color">
        <p>Color:<span>Royal Brown</span></p>

        <div id="colors">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div id="size">
        <ul>
          <li>Size:<span>8</span></li>
          <li>View Size Chart</li>
        </ul>

        <ul>
          <li>6</li>
          <li>8</li>
          <li>10</li>
          <li>14</li>
          <li>18</li>
          <li>20</li>
        </ul>
      </div>

      <div id="buttons">
        <button type="button">Add To Cart</button>
        <button type="button">Checkout Now</button>
      </div>

      <span id="delivery">Delivery T&C</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#product {
  margin: 0 100px;
  padding-bottom: 80px !important;

  border-radius: 0.5px;
  border-bottom: 1px dashed var(--BORDER02);

  display: flex;
  justify-content: space-between;

  #left {

    #pictures {

      #first-div {
        display: flex;
        justify-content: space-between;

        img:first-child {
          width: 458px;
          height: 610px;

          margin-bottom: 24px;
        }

        #icons {
          height: 610px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;

          ul {
            margin-left: 35px;
            margin-right: 135px;

            li {
              background: var(--GRAY06);

              width: 52px;
              height: 52px;

              margin-bottom: 20px;
              padding: 16px;

              border-radius: 8px;

              cursor: pointer;

              span {
                color: var(--BLACK03);
                font-size: 20px;
              }

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
        }
      }

      #other-images {
        width: 458px;
        height: 101px;

        display: flex;
        justify-content: space-between;

        img {
          width: 76px;
          height: 100px;
          border-radius: 8px;
        }
      }
    }
  }

  #right {
    #collection-name {
      color: #8F8F8F;

      font-size: 16px;
      letter-spacing: 1%;
    }

    #product-name {
      color: var(----BLACK02);

      margin: 12px 20px 0 0;

      font-size: 36px;
      font-weight: 600;
      letter-spacing: -0.5%;
    }

    #price-rating {
      margin: 20px 28px 0 0;

      border-radius: 0.5px;
      border-bottom: 1px dashed var(--BORDER02);

      display: flex;
      justify-content: space-between;

      #price {
        ul {
          display: flex;

          li {
            &:first-child {
              color: #666666;

              margin-right: 6px;

              font-size: 18px;
              text-decoration: line-through;
            }

            &:last-child {
              color: var(--BLACK03);

              font-size: 28px;
              font-weight: 600;
            }
          }
        }
      }

      #rating {
        ul {
          display: flex;

          li {
            &:first-child {
              color: #666666;

              font-weight: 400;
              font-size: 20px;
            }

            &:last-child {
              color: var(--BLACK03);

              font-size: 24px;
              font-weight: 600;

              display: flex;

              span {
                color: var(--ORANGE);

                width: 24px;
                height: 24px;

                border-radius: 1px;
              }
            }
          }
        }
      }
    }

    #description {
      #desc-title {
        color: var(----BLACK02);

        margin: 28px 10px 0 0;

        font-family: Raleway;
        font-weight: 700;
        font-size: 20px;
      }

      p {
        color: #666666;

        margin-bottom: 40px;

        font-size: 16px;
        font-weight: 400px;

        line-height: 130%;

        span {
          color: #000;

          font-weight: 500px;

          cursor: pointer;
        }
      }

    }

    #color {
      margin-bottom: 40px;

      p {
        color: #8F8F8F;

        margin-bottom: 18px;

        font-size: 20px;
        font-weight: 500;

        line-height: 120%;

        span {
          color: var(----BLACK02);

          font-weight: 600;
        }
      }

      #colors {
        ul {
          display: flex;

          margin-bottom: 40px;

          li {
            width: 75px;
            height: 40px;

            margin-right: 14px;
            border-radius: 8px;

            cursor: pointer;

            &:first-child {
              background-color: #534029;

              border: 1px solid var(--BLACK03);
              border-radius: 6px;
            }

            &:nth-child(2) {
              background-color: var(--WHITE02);
            }

            &:nth-child(3) {
              background-color: #3A6A90;
            }

            &:last-child {
              background-color: #11171D;
            }
          }
        }
      }
    }

    #size {
      margin-bottom: 56px;

      ul:first-child {
        margin-bottom: 18px;

        display: flex;
        justify-content: space-between;

        li {
          &:first-child {
            color: #8F8F8F;

            font-size: 20px;
            font-weight: 500;

            line-height: 120%;

            span {
              color: var(----BLACK02);

              font-weight: 600;
            }
          }

          &:last-child {
            color: var(--GRAY02);

            font-size: 16px;
            font-weight: 500;
            line-height: 120%;

            text-decoration: underline;
          }
        }
      }

      ul:last-child {
        display: flex;
        justify-content: space-between;

        li {
          color: var(--GRAY02);

          width: 75px;
          height: 40px;
          //padding: 14px 36px;

          padding: 10px;

          text-align: center;
          justify-content: center;

          font-size: 20px;
          font-weight: 600;

          line-height: 120%;

          border: 1px solid var(--WHITE03);
          border-radius: 8px;

          &:nth-child(2) {
            color: var(--BLACK03);
            background-color: var(--WHITE02);

            border: 1px solid #333;
          }
        }
      }
    }

    #buttons {
      margin-bottom: 38px;

      justify-content: space-between;

      button {
        font-size: 20px;
        line-height: 120%;

        &:first-child {
          color: var(--WHITE01);
          background-color: var(--BLACK03);

          //width: 296px;
          width: 60%;
          height: 58px;

          margin-right: 24px;
          font-weight: 600;

          border-radius: 8px;
        }

        &:last-child {
          color: #333;

          //width: 200px;
          height: 58px;

          font-weight: 500;

          border-radius: 8px;
          border: 1px solid var(--BORDER01);
        }
      }
    }

    #delivery {
      color: var(--GRAY05);

      font-size: 16px;
      font-weight: 500;

      line-height: 120%;

      text-decoration: underline;
    }
  }
}
</style>
