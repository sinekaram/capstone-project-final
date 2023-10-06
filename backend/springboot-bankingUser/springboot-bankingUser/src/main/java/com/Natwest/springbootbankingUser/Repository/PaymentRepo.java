package com.Natwest.springbootbankingUser.Repository;

import com.Natwest.springbootbankingUser.Entity.PaymentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepo extends MongoRepository<PaymentInfo,String> {
}
