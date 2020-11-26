import style from "./App.module.scss";
import Slider from "./components/Slider";
import Slider_multiple from "./components/Slider_multiple";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>contact</li>
          <li>products</li>
        </ul>
      </header>
      <banner>
        <div className={style.banner_text}>
          <h3>The Text is here in the left side</h3>
        </div>
      </banner>
      <ad_body>
        <div className={style.ad_non_ad}>
          <div className={style.upper}>
            <div className={style.upper_items}>top</div>
            <div className={style.upper_items}>top</div>
            <div className={style.upper_items}>top</div>
            <div className={style.upper_items}>top</div>
            <div className={style.upper_items}>top</div>
          </div>
          <div className={style.upper}>
            <div className={style.upper_items}>bottom</div>
            <div className={style.upper_items}>bottom</div>
            <div className={style.upper_items}>bottom</div>
            <div className={style.upper_items}>bottom</div>
            <div className={style.upper_items}>bottom</div>
          </div>
        </div>
        <div className={style.ad}>Advertisement</div>
      </ad_body>
      <slide_list>
        <div className={style.slider}>
          <Slider_multiple />
        </div>
        <div className={style.listings}>
          <div className={style.list_heading}>Items list</div>
          <div className={style.list}>item 1</div>
          <div className={style.list}>item 2</div>
          <div className={style.list}>item 3</div>
          <div className={style.list}>item 4</div>
        </div>
      </slide_list>
      <slide_video>
        <div className={style.video}>video section</div>
        <div className={style.slider}>
          <Slider />
        </div>
      </slide_video>
      <footer>
        <div className={style.copyright}>ⓒ pradeepk.com.np</div>
      </footer>
    </>
  );
}

export default App;
