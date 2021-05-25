import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { connect } from "react-redux";
import { changeThemeMainColor } from "../actions/shiftActions";

class SketchColor extends React.Component {
  state = {
    displayColorPicker: false,
    background: "#fff",
    color: {
      r: "0",
      g: "155",
      b: "203",
      a: "1",
    },
    background: "#fff",
  };
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.props.changeThemeMainColor(color.hex);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
          top: "30%",
          left: "10%",
          // transform: 'translate(-50%, -50%)',
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shiftData: state.shift,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeThemeMainColor: (color) => dispatch(changeThemeMainColor(color)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchColor);
