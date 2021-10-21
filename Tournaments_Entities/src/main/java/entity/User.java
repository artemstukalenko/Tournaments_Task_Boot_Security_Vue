package entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "users")
public class User extends AppEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private UserRole userRole;
    @Column(name = "name")
    private String name;
    @Column(name = "user_name")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "is_admin")
    private boolean isAdmin;

    public User() {}

    public User(int userId, UserRole userRole, String name, String username, String password, boolean isAdmin) {
        this.userId = userId;
        this.userRole = userRole;
        this.name = name;
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    public User(UserRole userRole, String name, String username, String password) {
        this.userRole = userRole;
        this.name = name;
        this.username = username;
        this.password = password;
        this.isAdmin = userRole.getRoleName().equalsIgnoreCase("admin") ? true : false;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && isAdmin == user.isAdmin && Objects.equals(userRole, user.userRole) && Objects.equals(name, user.name) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userRole, name, username, password, isAdmin);
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userRole=" + userRole +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", isAdmin=" + isAdmin +
                '}';
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
