import { createEffect, createSignal, Show } from "solid-js";
import { jwt, addCart } from "cart/cart";

export default ({ id }) => {
  const [loggedIn, setLoggedId] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedId(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addCart(id)}
        class="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
      >
        Add To Cart
      </button>
    </Show>
  );
};
