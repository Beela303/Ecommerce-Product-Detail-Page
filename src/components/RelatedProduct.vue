<template>
  <div id="related-product">
    <div id="title">
      <h2>Related Product</h2>
      <span>View All</span>
    </div>

    <div id="products">
      <div class="product">
        <img src="../Brown Aesthetic.jpg" alt="Product Image" />
        <p class="product-title">Whistle</p>
        <p class="price">$26</p>
        <p class="details">Wide Leg Cropped Jeans, Denim</p>
        <div class="rating-sold">
          <ul>
            <li><span class="material-symbols-outlined">star</span>4.8</li>
            <li>1,238 sold</li>
          </ul>
        </div>
      </div>

      <div class="product">
        <img src="../Brown Aesthetic.jpg" alt="Product Image" />
        <p class="product-title">John Lewis ANYDAY</p>
        <p class="price">$26</p>
        <p class="details">Long Sleeve Utility Shirt, Navy, 6</p>
        <div class="rating-sold">
          <ul>
            <li><span class="material-symbols-outlined">star</span>4.8</li>
            <li>1,238 sold</li>
          </ul>
        </div>
      </div>

      <div class="product">
        <img src="../Brown Aesthetic.jpg" alt="Product Image" />
        <p class="product-title">John Lewis ANYDAY</p>
        <p class="price">$32</p>
        <p class="details">Stripe Curved Hem Shirt, Blue</p>
        <div class="rating-sold">
          <ul>
            <li><span class="material-symbols-outlined">star</span>4.5</li>
            <li>620 sold</li>
          </ul>
        </div>
      </div>

      <div class="product">
        <img src="../Brown Aesthetic.jpg" alt="Product Image" />
        <p class="product-title">John Lewis ANYDAY</p>
        <p class="price">$40</p>
        <p class="details">Denim Overshirt, Mid Wash</p>
        <div class="rating-sold">
          <ul>
            <li><span class="material-symbols-outlined">star</span>4.6</li>
            <li>238 sold</li>
          </ul>
        </div>
      </div>

      <div class="product">
        <img src="../Brown Aesthetic.jpg" alt="Product Image" />
        <p class="product-title">John Lewis ANYDAY</p>
        <p class="price">$79</p>
        <p class="details">Linen Blazer, Navy</p>
        <div class="rating-sold">
          <ul>
            <li><span class="material-symbols-outlined">star</span>4.8</li>
            <li>1,238 sold</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#related-product {
  width: 85%;
  margin: 80px 0 100px 100px;

  #title {
    margin-bottom: 24px;

    display: flex;
    justify-content: space-between;

    h2 {
      color: var(--BLACK03);

      font-size: 28px;
      font-weight: 600;
    }

    span {
      color: var(--GRAY02);

      font-size: 16px;
      font-weight: 500;

      text-decoration: underline;
    }
  }

  #products {
    display: flex;
    justify-content: space-between;

    .product {
      img {
        width: 212px;
        height: 284px;

        margin-bottom: 16px;
      }

      .product-title {
        color: var(----BLACK02);

        margin-bottom: 16px;

        font-size: 18px;
        font-weight: 600;

        line-height: 140%;
        letter-spacing: 0.2px;
      }

      .price {
        color: var(--BLACK03);
        margin-bottom: 6px;

        font-size: 20px;
        font-weight: 6;

        line-height: 120%;
        letter-spacing: 0.2px;
      }

      .details {
        color: var(--GRAY05);

        margin-bottom: 8px;

        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
      }

      .rating-sold {
        ul {
          display: flex;

          li {
            &:first-child {
              color: #0B0F0E;

              margin-right: 8px;

              font-size: 16px;
              font-weight: 400;

              line-height: 160%;

              span {
                color: var(--ORANGE);

                width: 24px;
                height: 24px;
              }
            }

            &:last-child {
              color: #666666;

              font-size: 16px;
              font-weight: 400;

              line-height: 160%;
            }
          }
        }
      }
    }
  }
}
</style>
