package com.cg.go;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.cg.go.dao.ProductRepository;
import com.cg.go.entity.ProductEntity;
import com.cg.go.exception.ProductException;
import com.cg.go.service.ProductService;

@RunWith(SpringRunner.class)
@SpringBootTest
class GreatOutdoorApplicationTests {

	@Autowired
	private ProductService productService;

	@MockBean
	private ProductRepository productRepository;

	@Test
	public void getProductsTest() {

		when(productRepository.findAll()).thenReturn(
				Stream.of(new ProductEntity("1", "Digital", 2000.0, "Black", "Watch", 2, "Fastrack", "water-proof"))
						.collect(Collectors.toList()));
		assertEquals(1, productService.findAllProducts().size());
	}

	@Test
	public void getProductByIdTest() {

		String id = "1";
		ProductEntity entity = new ProductEntity("1", "Digital", 2000.0, "Black", "Watch", 2, "Fastrack",
				"water-proof");
		when(productRepository.findById(id)).thenReturn(Optional.of(entity));

		assertEquals("Digital", productService.findByProductId(id).getProductName());
	}

	@Test
	public void addProductTest() throws ProductException {

		ProductEntity entity = new ProductEntity("1", "Digital", 2000.0, "Black", "Watch", 2, "Fastrack",
				"water-proof");
		productService.addProduct(entity);
	}

	@Test
	public void deleteProductTest() throws ProductException {

		String id = "1";
		productService.deleteByProductId(id);
		verify(productRepository, times(1)).deleteById(id);
	}

}
