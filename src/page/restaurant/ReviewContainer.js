import {
  Box,
  Button,
  Center,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings";
import { useNavigate } from "react-router-dom";

export function ReviewContainer({ reviews }) {
  const navigate = useNavigate();
  return (
    <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>작성날짜</Th>
            <Th>평점</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reviews === null ? (
            <Box>
              <h3>작성된 리뷰가 없습니다.</h3>
              <Button colorScheme="green">리뷰작성</Button>
            </Box>
          ) : (
            reviews.map((reivew) => (
              <Tr
                key={reivew.no}
                onClick={() => navigate(`/review/${reivew.no}`)}
              >
                <Td>{reivew.no}</Td>
                <Td>{reivew.title}</Td>
                <Td>{reivew.writer}</Td>
                <Td>{reivew.inserted}</Td>
                <Td>
                  <StarRatings
                    rating={reivew.starPoint}
                    starDimension="13px"
                    starSpacing="4px"
                    starRatedColor="blue"
                    numberOfStars={5}
                  />
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      <Flex gap={5} justifyContent={"space-between"} margin={5}>
        <Button onClick={() => navigate("/review")} colorScheme="blue">
          더보기
        </Button>

        <Button colorScheme="blue" onClick={() => navigate("/write")}>
          리뷰작성
        </Button>
      </Flex>
    </Box>
  );
}