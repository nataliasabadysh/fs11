import { Button } from "../Button";

export const Pagination = ({ pages, onChangePage }) => {
  return (
    <ul
      style={{
        width: 200,
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 40,
      }}
    >
      {pages.map((item) => (
        <li key={item} onClick={() => onChangePage(item)}>
          <Button label={item} />
        </li>
      ))}
    </ul>
  );
};
