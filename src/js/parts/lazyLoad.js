export default function lazy() {
  $('.js-lazy').each((index, el) => {
  const $image = $(el);
  const realSrc = $image.attr('data-src');

  $image.attr('src', realSrc);  
});
}

