import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    //todo Public folder in next js
    // Next JS automatically makes content in the pages folder visibile to the user
    // and will be served statically
    //* src can defined below like that because it automatically routes to the images in the public folder
    //* no need of "/public" because it is already visible to us, as if we are in that folder

    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>TITLE</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
