import Image from "next/image";
import styles from './singleproduct.module.scss'

type SingleProductPageProps = {
  params:any
}

const SingleProductPage = async ({ params }:SingleProductPageProps) => {

export default SingleProductPage;

function SingleProductPage() {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct__infoContainer}>
        <div className={styles.singleProduct__imgContainer}>
          <Image src="/user.jpg" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.singleProduct__formContainer}>
        <form action={updateProduct} className={styles.singleProduct__form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage