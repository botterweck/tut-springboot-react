package ie.lero.examples.demo.student;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

    public List<Student> getAllStudent() {
        return List.of(
                new Student(UUID.randomUUID(),
                        "James",
                        "Bond",
                        "jamesbond@gmail.com",
                        Student.Gender.MALE),
                new Student(UUID.randomUUID(),
                        "Elisa",
                        "Tamara",
                        "elisatamara@gmail.com",
                        Student.Gender.FEMALE)
        );
    }
}
