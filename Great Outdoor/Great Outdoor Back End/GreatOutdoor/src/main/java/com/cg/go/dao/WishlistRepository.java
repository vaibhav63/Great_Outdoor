package com.cg.go.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.go.entity.WishlistItemEntity;

@Repository
public interface WishlistRepository extends JpaRepository<WishlistItemEntity, Long> {

	List<WishlistItemEntity> findAllByUserId(String userId);

	@Query("select w from WishlistItemEntity w where w.productId =:pid   and w.userId=:uid")
	WishlistItemEntity findWishlistItem(@Param("pid") String productId, @Param("uid") String userId);

	@Modifying
	@Transactional
	@Query("DELETE FROM WishlistItemEntity w WHERE w.userId=:uid")
	void deleteWishlist(@Param("uid") String userId);

	@Modifying
	@Transactional
	@Query("DELETE  FROM WishlistItemEntity w WHERE w.productId =:pid   and w.userId=:uid")
	void deleteWishlistItem(@Param("uid") String userId, @Param("pid") String productId);

}
