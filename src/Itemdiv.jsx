import { TextField } from "@mui/material";
function Itemdiv() {
  return (
    <div>
      <TextField
        fullWidth={true}
        label="Item"
        variant="standard"
        onChange={this.itemChangeContent}
      />
      <br />
      <TextField
        fullWidth={true}
        label="Quantity"
        variant="standard"
        onChange={this.quantityChangeContent}
      />
    </div>
  );
}
export default Itemdiv;
