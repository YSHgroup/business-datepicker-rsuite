import { Col, Grid } from "rsuite";
import { useSelectedRangeContext } from "../contexts";

export default function SelectedRange() {
  const { selectedRange } = useSelectedRangeContext();
  return (
    <Grid as = {'div'}>
        <Col>
      <h4>Weekdays: </h4>
      <ul>
        {selectedRange?.weekdays.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <h4>Weekends: </h4>
      <ul>
        {selectedRange?.weekends.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      </Col>
    </Grid>
  );
}
