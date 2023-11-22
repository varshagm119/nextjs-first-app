"use client";
import { useRouter } from "next/navigation";

const AboutUsDetail = ({params}) => {
  // const router = useRouter();
  // const { id } = router.query;

  const details = [
    { id: "1", name: "Yash", role: "Senior Developer" },
    { id: "2", name: "Vaibhav", role: "Backend Developer" },
    { id: "3", name: "Suresh", role: "Frontend Developer" },
  ];
 

  const detail = details.find((item) => item.id === params);
  if (!detail) {
    return <div>Developer doesnt exist</div>;
  }

  return (
    <div>
      <h1>{detail.name}</h1>
      <p>{detail.role}</p>
    </div>
  );
};

export default AboutUsDetail;
