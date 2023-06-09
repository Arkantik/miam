import Badge from "./Badge";
import Button from "./Button";
import Rating from "./Rating";
import Characteristic from "./Characteristic";

export default function RecipeCard({ recipe, handleFavorite, handleRating }) {
  const {
    id,
    src,
    alt,
    name,
    description,
    category,
    serving,
    time,
    rating,
    favorite,
  } = recipe;

  return (
    <div className="recipe__card relative w-[180px] rounded-xl bg-lightmode text-dark drop-shadow dark:bg-dark dark:text-neutral">
      <img
        className="card__hero max-h-[120px] w-full rounded-t-xl object-cover object-center"
        src={src}
        alt={alt}
      />

      <div className="card__content space-y-2 px-3 pb-4 pt-1.5">
        <div className="content__heading">
          <h3 className="text-base text-dark dark:text-neutral">{name}</h3>
          <p className="text-xs text-dark25 dark:text-neutral/50">
            {description}
          </p>

          <ul className="content_category my-1 flex items-center gap-1 text-xs">
            {category.map((cat, i) => (
              <Badge key={category[i]} categoryName={category[i]} />
            ))}
          </ul>
        </div>

        <div className="content__details space-y-3">
          <div className="flex justify-between">
            <Characteristic
              src={"../assets/icon/user-group.svg"}
              alt={"serving"}
              info={serving}
            />
            <Characteristic
              src={"../assets/icon/hourglass.svg"}
              alt={"preparation time"}
              info={time}
            />
          </div>

          <Rating id={id} initialRating={rating} handleRating={handleRating} />
        </div>
      </div>

      <Button
        onClick={() => handleFavorite(id)}
        customStyle="absolute -right-1 bottom-3"
      >
        <svg
          width="38"
          height="23"
          viewBox="0 0 38 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.6727 -1.33691e-06C1.46921 -0.00012046 1.26918 0.0421569 1.09231 0.122669C0.915444 0.203182 0.767831 0.319155 0.664004 0.45917C0.560177 0.599186 0.503713 0.758419 0.500174 0.921195C0.496636 1.08397 0.546142 1.24468 0.64382 1.3875L7.37023 11.25L0.643819 21.1125C0.546141 21.2553 0.496635 21.416 0.500173 21.5788C0.503712 21.7416 0.560176 21.9008 0.664003 22.0408C0.76783 22.1808 0.915443 22.2968 1.09231 22.3773C1.26918 22.4578 1.46921 22.5001 1.6727 22.5L33.3126 22.5C34.5558 22.5 35.748 22.1049 36.6271 21.4016C37.5062 20.6984 38 19.7446 38 18.75L38 3.75C38 2.75544 37.5062 1.80161 36.6271 1.09835C35.748 0.395088 34.5558 1.00452e-07 33.3126 4.61113e-08L1.6727 -1.33691e-06Z"
            fill="#FFE4E1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.0998 7.11377C27.8462 4.28653 34.7112 9.23669 25.0998 15.5995C15.4883 9.23669 22.3534 4.28851 25.0998 7.11774L25.0998 7.11377Z"
            className={
              favorite ? "fill-accent" : "fill-lightmode dark:fill-darkmode"
            }
          />
        </svg>
      </Button>
    </div>
  );
}
