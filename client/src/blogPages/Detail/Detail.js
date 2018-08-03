import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import EditBtn from "../../components/EditBtn";
import FontSizeP from "../../components/FontSize/FontSizeP";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";




class Detail extends Component {
  state = {
    blog: {},
    title: "",
    postedBy: "",
    content: ""
  };
  // When this component mounts, grab the blog with the _id of this.props.match.params.id
  // e.g. localhost:3000/blogs/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBlog(this.props.match.params.id)
      .then(res => this.setState({ blog: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3 sm-0"></Col>
          <Col size="md-6 sm-12">

            <Jumbotron>
              <h4>Edit your post</h4>
            </Jumbotron>
            <form>
              <article>
                <p>
                {this.state.blog.title}
                </p>
              </article>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.postedBy}
                onChange={this.handleInputChange}
                name="postedBy"
                placeholder="Posted by (required)"
              />
              <TextArea
                value={this.state.content}
                onChange={this.handleInputChange}
                name="content"
                placeholder="Content"

              />
              <FormBtn
                disabled={!(this.state.postedBy && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit a Post
              </FormBtn>
            </form>


          </Col>
          <Col size="md-3 sm-0"></Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.blog.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to General Blog Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
