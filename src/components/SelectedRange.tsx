import { Col, Grid, List } from "rsuite";
import { useSelectedRangeContext } from "../contexts";

export default function SelectedRange() {
  const { selectedRange } = useSelectedRangeContext();
  return (
    <Grid as={"div"}>
      <Col xs={8}>
        <h4>Weekdays: </h4>
        {selectedRange && (
          <List size="sm">
            {selectedRange?.weekdays.map((day) => (
              <List.Item key={day}>{day}</List.Item>
            ))}
          </List>
        )}

        <h4>Weekends: </h4>

        {selectedRange?.weekends && (
          <List>
            {selectedRange?.weekends.map((day) => (
              <List.Item key={day}>{day}</List.Item>
            ))}
          </List>
        )}
      </Col>
    </Grid>
  );
}
